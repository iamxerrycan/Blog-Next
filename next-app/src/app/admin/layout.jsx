import AdminHeader from "../components/AdminHeader";

const Adminlayout = ({ children }) => {
  return <section>
    <AdminHeader/>
    {children}
  </section>;
};

export default Adminlayout;
