//Components
import RegisterForm from "../../components/LoginForm/RegisterForm"
//react-query
import { useMutation } from "@tanstack/react-query"
//toast
import { toast } from "sonner"
//APi services
import { handleRegister } from "../../services"
import { useNavigate } from "react-router-dom"
//Mui
import { Box, Typography } from "@mui/material"
import AuthSideBox from "../../components/LoginForm/AuthSideBox"
import FormHeader from "../../components/LoginForm/FormHeader"

const Register = () => {
  const navigate = useNavigate()

  const { mutateAsync: registerMutation, isLoading } = useMutation({
    mutationFn: handleRegister,
    onSuccess: async (data) => {
      if (data?.success) {
        navigate("/auth/signin")
        toast.success(`Registered successfully !`)
      }
    },
    onError(error: Error) {
      toast.error(`${error}`)
    },
  })

  return (
    <Box className="flex justify-between flex-col md:flex-row w-full h-screen ">
      <AuthSideBox />

      {/* Register Form */}
      <Box className="w-full md:w-1/2 flex flex-col h-full overflow-y-auto items-center lg:px-20 px-6 py-14 relative gap-6">
        <FormHeader
          title="Sign Up"
          subtitle="Registration process for user"
          onBack={() => navigate(-1)}
        />

        <RegisterForm
          onSubmit={async (values) => {
            await registerMutation(values)
          }}
          loading={isLoading}
        />

        <Box
          sx={{
            marginTop: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <Typography variant="caption" sx={{ color: "gray" }}>
            All Rights Reserved ©{" " + new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Register
