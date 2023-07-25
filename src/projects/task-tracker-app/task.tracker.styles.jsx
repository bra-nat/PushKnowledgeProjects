import { styled } from "styled-components";

export const TableStyle = styled.div`
    
  width: 700px;
  margin: auto;
  font-weight: 600;

ul {
    list-style: none;
}

  ul.table-head {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #333;
    color: #fff;
    padding: 15px 20px;
    border-radius: 3px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  ul.table-row {
    margin-bottom: 25px;
    padding-left: 0;
    & li {
      background: #fff;
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
      padding: 25px 30px;
      border-radius: 3px;
      margin-bottom: 25px;
      transition: all 0.2s ease;
      &:hover {
        cursor: pointer;
        box-shadow: none;
      }
      &:nth-child(odd) {
        background: rgba(36, 199, 245, 0.3);
      }
      &:nth-child(even) {
        background: rgba(36, 199, 245, 0.1);
      }

      &.completed {
        color: gray;
        background: lightgray;
        box-shadow: none;
      }
    }
  }
  input {
    border: none;
    padding: 0.35rem 0.75rem;
    font-weight: bold;
    font-style: 0.9;
  }
  input:hover {
    background: rgba(104, 104, 104, 0.2)
  }
`;


export const NewTaskStyle = styled.li`
    display: flex;
    justify-content: space-between;
`;