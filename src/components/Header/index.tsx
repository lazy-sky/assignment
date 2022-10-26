import style from './header.module.scss'

// TODO: 받은 조직 및 저장소 이름 보여주도록
const Header = () => {
  return (
    <header className={style.gnb}>
      <h1>Organization Name / Repository Name</h1>
    </header>
  )
}

export default Header
