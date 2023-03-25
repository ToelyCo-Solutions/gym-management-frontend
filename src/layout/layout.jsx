function Layout({ children }) {
  return (
    <div className="">
      <p>Header</p>
      <div>{children}</div>
      <p>Footer</p>
    </div>
  );
}

export default Layout;
