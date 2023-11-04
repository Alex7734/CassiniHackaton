import "./Searchbar.css";
import MenuButton from "@/components/MenuButton/MenuButton";
import useSidebar from "@/store/sidebar";

const SearchBar = () => {
  const [, sidebarActions] = useSidebar();

  return (
    <div style={{
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: '10px',
      zIndex: "4"
    }} onClick={sidebarActions.toggle}>
    <div className="search-bar-container">
      <MenuButton />
    </div>
</div>
  );
};

export default SearchBar;
