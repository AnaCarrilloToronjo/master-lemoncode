import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MembersList } from "../members-list/members-list";
import { MemberDetail } from "../members-list/member-detail";
import { Characters } from "../rick-morty/characters";
import { CharacterDetail } from "../rick-morty/character-detail";
import { Navbar } from "../navbar";
import { MyContextProvider } from "../context/context.provider";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="router">
        <Navbar />
        <MyContextProvider>
          <Routes>
            <Route path="/" element={<MembersList />} />
            <Route path="/:login" element={<MemberDetail />} />
            <Route path="/character" element={<Characters />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
          </Routes>
        </MyContextProvider>
      </div>
    </BrowserRouter>
  );
};
