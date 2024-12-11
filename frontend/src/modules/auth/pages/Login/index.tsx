//Components
import LoginForm from "../../components/LoginForm/LoginForm"
//react-query
import { useMutation } from "@tanstack/react-query"
//toast
import { toast } from "sonner"
//APi services
import { handleLogin } from "../../services"
//Mui
import { Box, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
//redux
import { useDispatch } from "react-redux"
import { login } from "../../../../store/slices/auth"
import AuthSideBox from "../../components/LoginForm/AuthSideBox"
import FormHeader from "../../components/LoginForm/FormHeader"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { mutateAsync: loginMutation, isLoading } = useMutation({
    mutationFn: handleLogin,
    onSuccess: async (data) => {
      if (data) {
        console.log("recieved data: ", data)
        dispatch(
          login({
            profile: data.user,
            tokens: data.tokens,
            isAuthenticated: true,
          })
        )
        toast.success(`login successfully !`)
        navigate("/")
      }
    },
    onError(error: Error) {
      toast.error(`${error}`)
    },
  })

  return (
    <Box className="flex justify-between flex-col md:flex-row w-full h-full min-h-screen ">
      <AuthSideBox />
      {/* Login Form */}
      <Box className="w-full md:w-1/2 flex flex-col justify-center items-center lg:px-20 px-6 relative gap-8 pb-16 min-h-[100vh]">
        <FormHeader title="Sign In" subtitle="Access your account securely" />

        <LoginForm
          onSubmit={async (values) => {
            await loginMutation(values)
          }}
          loading={isLoading}
        />

        <Stack
          sx={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            bottom: 10,
            textAlign: "center",
          }}
        >
          <Typography variant="caption" sx={{ color: "gray" }}>
            All Rights Reserved ©{" " + new Date().getFullYear()}
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default Login
