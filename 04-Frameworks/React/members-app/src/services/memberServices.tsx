import { MemberEntity } from "../model";

export const getMembers = (
  inputValue,
  page
): Promise<{
  body: Promise<MemberEntity[]>;
  link: string;
}> => {
  return fetch(
    `https://api.github.com/orgs/${inputValue}/members?page=${page}`
  ).then((response) => {
    return {
      body: response.json(),
      link: response.headers.get("link"),
    };
  });
};

export const getMemberDetail = (login: string): Promise<MemberEntity> => {
  return fetch(`https://api.github.com/users/${login}`).then((response) =>
    response.json()
  );
};

export const getOrganizationExist = (organization: string) => {
  return fetch(`https://api.github.com/orgs/${organization}`).then(
    (response) => {
      if (response.status !== 404) return true;
      else return false;
    }
  );
};
