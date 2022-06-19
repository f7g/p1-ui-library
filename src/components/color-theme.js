export default function ColorTheme() {
  const Container = (props) => (
    <div className="p-2 text-sm bg-gray-300">{props.children}</div>
  );
  const Box = (props) => (
    <div className={"w-36 h-32 inline-block mr-1 " + props.className}>
      {props.children}
    </div>
  );
  return (
    <section>
      <h2>Color Theme</h2>
      <Container>
        <Box className="primary on-primary">.primary</Box>
        <Box className="primary-variant on-primary">.primary-variant</Box>
        <Box className="secondary on-secondary">.secondary</Box>
        <Box className="secondary-variant on-secondary">.secondary-variant</Box>
      </Container>
      <Container>
        <Box className="background">.background</Box>
        <Box className="surface">.surface</Box>
        <Box className="error on-error">.error</Box>
      </Container>
      <Container>
        <Box className="on-primary">.on-primary</Box>
        <Box className="on-secondary">.on-secondary</Box>
        <Box className="on-background">.on-background</Box>
        <Box className="on-surface">.on-surface</Box>
        <Box className="on-error">.on-error</Box>
      </Container>
    </section>
  );
}
