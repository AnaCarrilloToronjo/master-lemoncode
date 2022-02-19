import React from "react";
import { useNavigate } from "react-router-dom";
import { MemberEntity } from "../../model";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface Props {
  member: MemberEntity;
}

export const Member: React.FC<Props> = (props) => {
  const { member } = props;
  const navigate = useNavigate();

  return (
    <TableBody>
      <TableRow
        key={member.id}
        hover
        role="checkbox"
        onClick={() => navigate(`/${member.login}`)}
      >
        <TableCell>
          <img src={member.avatar_url} />
        </TableCell>
        <TableCell>
          <span>{member.id}</span>
        </TableCell>
        <TableCell>
          <span>{member.login}</span>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
