const Footer = () => {
  const date = new Date()
  return (
    <footer>
      <p>Copy rights &copy; {date.getFullYear()} are reserved by devpdhana</p>
    </footer>
  )
}
export default Footer