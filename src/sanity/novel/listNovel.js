export const GET_ALL_NOVEL = `
    *[_type == 'story'] | order(dateTime(_createdAt) asc) {
        _id,
        _createdAt,
        title
    }
`;
export const GET_DETAIL_NOVEL = `
*[_type == 'story' && _id match $IdNovel][0] {
    title,
    content,
    vocabularies[]->{
        _id,
        en,
        vi
    }
}
`;

export const GET_VOCABULARY = `
*[_type == 'vocabulary'][0]{
    _id,
    en,
    vi
}
`;
