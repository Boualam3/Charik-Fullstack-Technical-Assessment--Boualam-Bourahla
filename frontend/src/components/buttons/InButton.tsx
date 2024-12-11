import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

interface InButtonProps extends LoadingButtonProps {
  textTransform?: string;
}

const InButton: React.FC<InButtonProps> = ({
  textTransform = "uppercase",
  ...props
}) => {
  return (
    <LoadingButton
      {...props}
      sx={{
        textTransform: textTransform,
      }}
    >
      {props.children}
    </LoadingButton>
  );
};

export default InButton;
