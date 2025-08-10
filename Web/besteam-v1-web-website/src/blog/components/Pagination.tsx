import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  padding: 10px 15px;
  border-radius: 5px;
`;

const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  height: 30px;
  margin: 0 5px;
  border: none;
  background-color: transparent;
  color: ${props => props.active ? '#00e676' : '#ffffff'};
  font-size: 16px;
  cursor: pointer;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.active ? '#00e676' : '#cccccc'};
  }
`;

const ArrowButton = styled(PageButton)`
  color: ${props => props.disabled ? '#444444' : '#00e676'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  font-size: 24px;
  
  &:hover {
    color: ${props => props.disabled ? '#444444' : '#00e676'};
  }
`;

const Dots = styled.span`
  color: #ffffff;
  margin: 0 5px;
`;

const Pagination = ({ currentPage = 1, totalPages = 3, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <PaginationContainer>
      <ArrowButton 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        &lt;
      </ArrowButton>
      
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        
        if (pageNumber === currentPage) {
          return (
            <PageButton 
              key={pageNumber} 
              active={true}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </PageButton>
          );
        }
        
        if (pageNumber <= 3 || pageNumber === totalPages) {
          return (
            <PageButton 
              key={pageNumber} 
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </PageButton>
          );
        }
        
        if (pageNumber === 4 && totalPages > 4) {
          return <Dots key="dots">...</Dots>;
        }
        
        return null;
      })}
      
      <ArrowButton 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        &gt;
      </ArrowButton>
    </PaginationContainer>
  );
};

export default Pagination;