import { SearchOutline } from "../svg";
import style from "../styles/search.module.css";

export const Searchinput = (props) => {
  return (
    <form className={style.searchForm}>
      <input type="search" required placeholder={props.placeholder} />
      <button>
        <SearchOutline height="20px" width="20px" />
      </button>
    </form>
  );
};
