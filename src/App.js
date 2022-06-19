function App() {
  return (
    <div className="space-y-6 p-8">
      <ColorTheme />
    </div>
  );
}

function ColorTheme() {
  const Box = (props) => (
    <div className={"w-36 h-32 inline-block mr-1 " + props.className}>
      {props.children}
    </div>
  );
  return (
    <section>
      <h2>Color Theme</h2>
      <div className="p-2 text-sm bg-gray-300">
        <Box className="primary on-primary">.primary</Box>
        <Box className="primary-variant on-primary">.primary-variant</Box>
        <Box className="secondary on-secondary">.secondary</Box>
        <Box className="secondary-variant on-secondary">.secondary-variant</Box>
      </div>
      <div className="p-2 text-sm bg-gray-300">
        <Box className="background">.background</Box>
        <Box className="surface">.surface</Box>
        <Box className="error on-error">.error</Box>
      </div>
      <div className="p-2 text-sm bg-gray-300">
        <Box className="on-primary">.on-primary</Box>
        <Box className="on-secondary">.on-secondary</Box>
        <Box className="on-background">.on-background</Box>
        <Box className="on-surface">.on-surface</Box>
        <Box className="on-error">.on-error</Box>
      </div>
    </section>
  );
}

export default App;
