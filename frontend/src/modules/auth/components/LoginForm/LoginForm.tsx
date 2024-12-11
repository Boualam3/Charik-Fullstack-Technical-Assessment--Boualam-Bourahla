// LoginForm.tsx
import React, { useState, MouseEvent } from "react"
import { Link } from "react-router-dom"

// Material-UI components
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { Typography } from "@mui/material"

// Other imports
import { useFormik } from "formik"
import * as Yup from "yup" // Import Yup for validation
import { handleChange } from "../../../../helpers/formHelpers"
import Button from "@mui/material/Button"
import LoadingButton from "@mui/lab/LoadingButton"
import { Stack } from "@mui/material"

export interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void
  loading: boolean
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  })

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string().required("Password is required"),
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: values.email,
      password: values.password,
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values)
    },
  })

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-5 justify-center w-full"
    >
      <TextField
        autoFocus
        fullWidth
        id="email"
        name="email"
        label={"Email"}
        value={values.email}
        onChange={(e) => handleChange(e, setValues)}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && (formik.errors.email as string)}
      />

      <TextField
        id="password"
        name="password"
        label={"Password"}
        fullWidth
        value={values.password}
        onChange={(e) => handleChange(e, setValues)}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        type={values.showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                aria-label="toggle password visibility"
              >
                {values.showPassword ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Stack direction="row" className="mb-8">
        <Typography sx={{ color: "#244051", fontWeight: "500" }}>
          {"Forgot your password ?"}
          <Link
            to="/auth/password/forgot"
            style={{
              textDecoration: "none",
              color: "#e66d3d",
              marginLeft: "3px",
            }}
          >
            {"Click here"}
          </Link>
        </Typography>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        variant="contained"
        onClick={() => {
          formik.handleSubmit()
        }}
        loading={loading}
        sx={{
          backgroundColor: "#00658d",
          borderRadius: "9999px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {"Login"}
      </LoadingButton>

      <Link to="/auth/signup">
        <Button
          fullWidth
          size="large"
          variant="outlined"
          className="rounded-full hover:bg-[#00658d]/5"
          sx={{
            backgroundColor: "white",
            borderRadius: "9999px",
            color: "#00658d",
            fontWeight: "bold",
          }}
        >
          {"Register now"}
        </Button>
      </Link>
    </form>
  )
}

export default LoginForm
