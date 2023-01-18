import { FaClinicMedical, FaUserAlt } from "react-icons/fa";
const Topbar = () => {
  return (
    <>
      <div style={cardStyle.TopView}>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            background: "gray",
            alignItems: "center",
            justifyContent: "center ",
          }}
        >
          <h3 style={{ marginLeft: 5, marginTop: 2 }}>
            <FaUserAlt />
          </h3>
        </div>
      </div>
      <div style={cardStyle.ToolbarContr}>
        <h4>Language List</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            marginTop: 10,
          }}
        >
          <h5 style={{ color: "gray" }}>
            <FaClinicMedical />
          </h5>
          <h5 style={{ marginLeft: 10, color: "gray" }}>Language List</h5>
        </div>
      </div>
    </>
  );
};

export default Topbar;

const cardStyle = {
  ToolbarContr: {
    display: "flex",
    width: 1080,
    height: 150,
    background: "#8F00FF",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 30,
    color: "#fff",
  },
  TopView: {
    display: "flex",
    width: 1080,
    height: 75,
    background: "#fff",
    justifyContent: "flex-end",
    alignItems: "center",
  },
};
