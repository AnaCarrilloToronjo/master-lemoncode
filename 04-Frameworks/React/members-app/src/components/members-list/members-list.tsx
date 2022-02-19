import React, { useState, useEffect, useContext } from "react";
import { Member } from "./members";
import {
  getMembers,
  getOrganizationExist,
} from "../../services/memberServices";
import { MemberEntity } from "../../model";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SearchIcon from "@mui/icons-material/Search";
import { MyContext } from "../context/context.provider";

const processingHeader = (link: string) => {
  return link
    .split(",")[1]
    .toString()
    .split(";")[0]
    .toString()
    .split("?")[1]
    .toString()
    .replace(">", " ");
};

export const MembersList: React.FC = () => {
  const { org, setOrg, page, setPage } = useContext(MyContext);
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [inputValue, setInputValue] = useState(org);
  const [lastPage, setlastPage] = useState(1);

  useEffect(() => {
    getMembers(org, page)
      .then((data) => {
        if (data.link) {
          const urlParams = new URLSearchParams(processingHeader(data.link));
          const lastPageNew = urlParams.get("page");
          setlastPage(parseInt(lastPageNew));
        } else {
          setlastPage(1);
        }
        return data.body;
      })
      .then((result) => setMembers(result));
  }, [page, org]);

  const handleClick = (e) => {
    switch (e.target.value) {
      case "first":
        setPage(1);
        break;
      case "decrease":
        if (page != 1) {
          setPage(page - 1);
        }
        break;
      case "increase":
        if (page < lastPage) {
          setPage(page + 1);
        }
        break;
      case "last":
        if (page < lastPage) {
          setPage(lastPage);
        }
        break;
    }
  };
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      getOrganizationExist(inputValue).then((data) => {
        if (data) {
          setOrg(inputValue);
        }
      });
    }
  };

  return (
    <div className="member-list">
      <h1>Members list</h1>
      <div className="member-input">
        <input
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => handleSearch(e)}
        ></input>
        <SearchIcon />
      </div>
      <TableContainer className="member-container">
        <Table className="member-table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>

          {members.map((member) => (
            <Member key={member.id} member={member} />
          ))}
        </Table>
        <div className="pagination">
          <button onClick={handleClick} value="first">
            &laquo;
          </button>
          <button onClick={handleClick} value="decrease">
            &lsaquo;
          </button>
          <button onClick={handleClick} value="increase">
            &rsaquo;
          </button>
          <button onClick={handleClick} value="last">
            &raquo;
          </button>
        </div>
      </TableContainer>
    </div>
  );
};
