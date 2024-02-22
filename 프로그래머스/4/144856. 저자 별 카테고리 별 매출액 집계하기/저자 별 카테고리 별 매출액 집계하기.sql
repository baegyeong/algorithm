-- 코드를 입력하세요
SELECT B.AUTHOR_ID, B.AUTHOR_NAME, C.CATEGORY, SUM(A.SALES*C.PRICE) AS TOTAL_SALES FROM BOOK_SALES A LEFT JOIN BOOK C ON A.BOOK_ID=C.BOOK_ID LEFT JOIN AUTHOR B ON C.AUTHOR_ID=B.AUTHOR_ID
WHERE A.SALES_DATE LIKE '2022-01%'
GROUP BY B.AUTHOR_NAME, C.CATEGORY
ORDER BY B.AUTHOR_ID, C.CATEGORY DESC