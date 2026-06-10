def solution(mats, park):
    R = len(park)
    C = len(park[0])

    mats.sort(reverse=True)

    for mat in mats:
        for i in range(R - mat + 1):
            for j in range(C - mat + 1):
                flag = False

                if park[i][j] != "-1":
                    continue

                for x in range(i, i + mat):
                    if flag:
                        break
                    for y in range(j, j + mat):
                        if park[x][y] != "-1":
                            flag = True
                            break

                if not flag:
                    return mat
                
    return -1