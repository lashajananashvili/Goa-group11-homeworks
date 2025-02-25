import ProfileCard from "./ProfileCard";

const ProfileList = ({ profiles }) => {
  return (
    <div style={listStyle}>
      {profiles.map((user, index) => (
        <ProfileCard key={index} {...user} />
      ))}
    </div>
  );
};

const listStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  padding: "20px",
};

export default ProfileList;
