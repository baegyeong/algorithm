#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

vector<int> solution(int m, int n, vector<vector<int>> picture) {
    vector<pair<int, int>> directions = {
        {0, 1},
        {1, 0},
        {0, -1},
        {-1, 0}
    };

    vector<vector<bool>> visited(m, vector<bool>(n, false));

    int areaNum = 0;
    int maxAreaSize = 0;

    auto bfs = [&](int startX, int startY) {
        queue<pair<int, int>> q;
        q.push({startX, startY});

        int num = picture[startX][startY];
        visited[startX][startY] = true;

        int areaSize = 1;

        while (!q.empty()) {
            auto [x, y] = q.front();
            q.pop();

            for (auto [dx, dy] : directions) {
                int nx = x + dx;
                int ny = y + dy;

                if (nx < 0 || nx >= m || ny < 0 || ny >= n || visited[nx][ny])
                    continue;
                if (picture[nx][ny] != num)
                    continue;

                visited[nx][ny] = true;
                q.push({nx, ny});
                areaSize++;
            }
        }

        maxAreaSize = max(maxAreaSize, areaSize);
    };

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (visited[i][j] || picture[i][j] == 0)
                continue;

            areaNum++;
            bfs(i, j);
        }
    }

    return {areaNum, maxAreaSize};
}