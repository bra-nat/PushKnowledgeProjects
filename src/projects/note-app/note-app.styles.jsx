import { styled } from "styled-components";

export const NoteStyle = styled.div``;

export const Icons = styled.span`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 0.3rem;
`;

export const DeleteIcon = styled.span`
    line-height: 24px;
    &:hover {
        color: red;
    }
    transition: all 0.3s ease;
`