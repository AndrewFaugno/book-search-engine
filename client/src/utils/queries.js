import { gql } from "@apollo/client";

export const GET_ME = gq`
    query Me {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                }
            }
    }
`;
