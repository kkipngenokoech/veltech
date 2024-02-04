export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        EverydayVisa
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
