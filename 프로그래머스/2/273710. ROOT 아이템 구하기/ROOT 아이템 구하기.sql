-- 코드를 작성해주세요
SELECT A.ITEM_ID, B.ITEM_NAME FROM ITEM_TREE A JOIN ITEM_INFO B ON A.ITEM_ID=B.ITEM_ID
WHERE A.PARENT_ITEM_ID IS NULL
ORDER BY ITEM_ID