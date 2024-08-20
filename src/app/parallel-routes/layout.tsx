export default function Layout({
  children,
  layOne,
  layThree,
  notif,
}: {
  children: React.ReactNode;
  layOne: React.ReactNode;
  notif: React.ReactNode;
  layThree: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <header>Header</header>
          {children} 
          <div>{notif}</div>
          <div>{layOne}</div>
          <div>{layThree}</div>
          
          <footer>Header</footer>
        </body>
      </html>
    </>
  );
}
