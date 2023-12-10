import Categories from "../../components/categories/categories-main.component";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div>
      <Outlet />
      <Categories />
    </div>
  );
}

export default Home;
