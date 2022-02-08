import { Member, MembersLinks } from "../types";
import store from "../store/index";

export const membersList = {
  async get(page = 1): Promise<MembersLinks>{
    const membersLink = await fetch(
      `https://api.github.com/orgs/${store.state.organization}/members?page=${page}`
    ).then((response) => {return {member: response.json(), link: response.headers.get("link")}});
      
    let m = await membersLink.member;
    return {members: m, link: membersLink.link};
  },

  async getMember(login: string): Promise<Member | undefined> {
    if (!login) {
      throw new Error("Login is required");
    }
    const member = await fetch(
      `https://api.github.com/users/${login}`
    ).then((response) => response.json());
    return member;
  },
};
