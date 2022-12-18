import styled from '@emotion/styled';
export const UserProfile = styled.div`
  color: rgba(0, 0, 0, 0.5);
  /* border: solid rgba(0, 0, 0, 0.5); */

  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const User = styled.div`
padding: 30px;
  display: grid;
  justify-items: center;
`;
export const UserIcon = styled.img`
  margin-bottom: 30px;
  border-radius: 50%;
`;
export const UserName = styled.h1`
  margin-top: 0px;
  margin-bottom: 15px;
  color: black;
`;
export const UserTag = styled.p`
  margin-bottom: 15px;
  margin-top: 0px;
`;


export const Statistics = styled.ul`
    display: flex;
    justify-content: space-around;
    background-color: rgba(135, 211, 239, 0.1);
    border-top: solid rgba(0, 0, 0, 0.35);
`;

export const StatisticsItem = styled.li`
    display: grid;
    justify-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    width: 33%;
    :not(:last-child){
        border-right: solid rgba(0, 0, 0, 0.35);

    }

`;

export const StatisticsAmount = styled.span`
margin-top: 10px;
    color: rgb(0, 0,0);
    font-weight: 900;
`;