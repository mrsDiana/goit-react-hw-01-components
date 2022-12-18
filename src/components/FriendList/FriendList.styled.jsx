import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  gap: 20px;
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  padding: 30px;
`;
export const FriendStatus = styled.span`
  background-color: ${props =>
    props.isOnline ? 'rgb(30, 204, 14)' : 'rgb(255, 0, 0)'};
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
export const Avatar = styled.img`
  width: 100px;
`;

export const FriendName = styled.p``;
