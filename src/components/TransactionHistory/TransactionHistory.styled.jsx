import styled from '@emotion/styled';

export const TransactionTable = styled.table`
	width: 100%;
	border: none;
	margin-bottom: 20px;
`;
export const TableTitle = styled.thead`
text-transform: uppercase;
th {
    
	font-weight: bold;
	text-align: left;
	border: none;
	padding: 10px 15px;
	background: #07bdef;
	font-size: 14px;
}
tr th:first-child {
border-radius: 8px 0 0 8px;
}
tr th:last-child {
	border-radius: 0 8px 8px 0;
}
    
`;

export const TableItem = styled.tbody`
    td {
	text-align: left;
	border: none;
	padding: 10px 15px;
	font-size: 14px;
	vertical-align: top;
}
tr:nth-child(even){
	background: #f3f3f3;
}
tr td:first-child {
    text-transform: capitalize;
	border-radius: 8px 0 0 8px;
}
tr td:last-child {
	border-radius: 0 8px 8px 0;
}

`;

