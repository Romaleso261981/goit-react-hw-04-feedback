import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 10px;
`;

export const FeedbackItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FeedbackBtn = styled.button`
  width: 100%;
  border-radius: 8px;
  font-weight: 700;
  padding: 10px;
  font-size: 15px;
  margin: 5px;
  :hover {
    background-color: goldenrod;
  }
`;
