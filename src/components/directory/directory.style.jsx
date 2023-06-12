import styled from 'styled-components';

const DirectoryContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export default DirectoryContainer;
