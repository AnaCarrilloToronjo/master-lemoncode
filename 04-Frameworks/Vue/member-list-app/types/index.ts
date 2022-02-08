type MemberId = string;

export interface Member {
  id: MemberId;
  login: string;
  avatar_url: string;
}

export interface MembersLinks{
  members : Member[];
  link: string;
}