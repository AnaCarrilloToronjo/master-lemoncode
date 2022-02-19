export interface MemberEntity {
    id: string;
    avatar_url: string;
    login:string;
    name: string;
    company: string;
    bio: string;
}

export interface CharacterEntity {
    id: string;
    image: string;
    name: string;
    status:string;
    species: string;
    gender:string;
}