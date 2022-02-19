import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMemberDetail } from "../../services/memberServices";
import { MemberEntity } from "../../model";

const createDefaultMemberDetail = () => ({
  id: "",
  avatar_url: "",
  login: "",
  name: "",
  company: "",
  bio: "",
});

export const MemberDetail: React.FC = () => {
  const [member, setMember] = useState<MemberEntity>(() =>
    createDefaultMemberDetail()
  );
  const { login } = useParams();

  useEffect(() => {
    getMemberDetail(login).then((data) => setMember(data));
  }, []);

  return member ? (
    <div className="member-detail">
      <h1>Detail member</h1>
      <div key={member.id} className="member-detail-container">
        <img src={member.avatar_url} />
        <div className="member-detail-info">
          <h3>{member.name} </h3>
          <hr />
          <div>Login: {member.login}</div>
          <div>Company: {member.company}</div>
          <div>Bio: {member.bio}</div>
        </div>
      </div>
    </div>
  ) : (
    <>Loading...</>
  );
};
