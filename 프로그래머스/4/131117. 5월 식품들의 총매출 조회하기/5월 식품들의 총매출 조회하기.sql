-- 코드를 입력하세요
SELECT A.PRODUCT_ID, B.PRODUCT_NAME, SUM(A.AMOUNT*B.PRICE) AS TOTAL_SALES FROM FOOD_ORDER A LEFT JOIN FOOD_PRODUCT B ON A.PRODUCT_ID=B.PRODUCT_ID
WHERE A.PRODUCE_DATE LIKE '2022-05%' AND PRODUCT_NAME IS NOT NULL
GROUP BY PRODUCT_ID
ORDER BY TOTAL_SALES DESC, A.PRODUCT_ID