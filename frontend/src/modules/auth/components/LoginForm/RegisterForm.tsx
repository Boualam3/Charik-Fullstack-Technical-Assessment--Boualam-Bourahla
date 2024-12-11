// LoginForm.tsx
import React, { useState, MouseEvent } from "react"
import { Link } from "react-router-dom"

// Material-UI components
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { Checkbox, FormControlLabel, Typography } from "@mui/material"

// Other imports
import { useFormik } from "formik"
import * as Yup from "yup" // Import Yup for validation
import { handleChange } from "../../../../helpers/formHelpers"
import LoadingButton from "@mui/lab/LoadingButton"
import { Stack } from "@mui/material"

export interface RegisterFormProps {
  onSubmit: (values: {
    email: string
    full_name: string
    password: string
  }) => void
  loading: boolean
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, loading }) => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    agreement: false,
    showConfirmPassword: false,
  })

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(5, "Full name must be at least 5 characters long")
      .required("Full Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string()
      .min(6, "must be greater than 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .min(6, "must be greater than 6 characters long")
      .required("Confirm password is required"),
    agreement: Yup.boolean().oneOf([true], "required").required("required"),
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })
  }
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { checked } = event.target
    setValues({
      ...values,
      [name]: checked,
    })
    formik.setFieldValue(name, checked)
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      agreement: values.agreement,
    },
    validationSchema,
    onSubmit: (values) => {
      const { fullName, email, password } = values
      onSubmit({ full_name: fullName, email, password })
    },
  })

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-5 justify-center w-full md:space-y-3"
    >
      <TextField
        autoFocus
        className="flex-1"
        id="fullName"
        name="fullName"
        label="Full Name"
        value={values.fullName}
        onChange={(e) => handleChange(e, setValues)}
        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
        helperText={
          formik.touched.fullName && (formik.errors.fullName as string)
        }
      />

      <TextField
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

      <TextField
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        fullWidth
        value={values.confirmPassword}
        onChange={(e) => handleChange(e, setValues)}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          (formik.touched.confirmPassword && formik.errors.confirmPassword) ||
          ""
        }
        type={values.showConfirmPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                aria-label="toggle confirmPassword visibility"
              >
                {values.showConfirmPassword ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Stack
        direction="row"
        className="w-full flex justify-start items-center "
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={values.agreement}
              onChange={(e) => handleCheckboxChange(e, "agreement")}
              sx={{
                color: "#244051",
                "&.Mui-checked": {
                  color: "#244051", // Color when checked
                },
              }}
            />
          }
          label=""
        />
        <Typography display="inline">
          I agrees to the
          <Link
            to="/auth/signin"
            style={{
              textDecoration: "underline",
              color: "#e66d3d",
              margin: "0 5px",
            }}
          >
            terms and conditions
          </Link>
          .
        </Typography>

        {formik.errors.agreement && (
          <Typography
            sx={{ marginLeft: "5px" }}
            variant="body2"
            className="text-xs ml-4"
            color="error"
          >
            {formik.errors.agreement as string}
          </Typography>
        )}
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        variant="contained"
        onClick={() => {
          formik.handleSubmit()
        }}
        loading={loading}
        className="rounded-full"
        sx={{
          backgroundColor: "#00658d",
          borderRadius: "9999px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Register
      </LoadingButton>

      <Stack direction="row" className="mb-8 w-full flex justify-center ">
        <Typography>
          I already have an account?
          <Link
            to="/auth/signin"
            style={{
              textDecoration: "none",
              color: "#e66d3d",
              marginLeft: "5px",
            }}
          >
            Login
          </Link>
        </Typography>
      </Stack>
    </form>
  )
}

export default RegisterForm
