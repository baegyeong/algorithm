#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <cmath>

using namespace std;

int answer = 0;
vector<char> node = {'A', 'C', 'F', 'J', 'M', 'N', 'R', 'T'};
vector<bool> visited(8, false);

bool compare(int diff, char op, int num) {
    if (op == '=') return diff == num;
    if (op == '<') return diff < num;
    return diff > num;
}

void dfs(vector<char>& result, const vector<string>& data) {
    if (result.size() == 8) {
        bool flag = false;

        for (const string& d : data) {
            char first = d[0];
            char second = d[2];

            int firstIdx = find(result.begin(), result.end(), first) - result.begin();
            int secondIdx = find(result.begin(), result.end(), second) - result.begin();

            int diff = abs(firstIdx - secondIdx) - 1;

            bool isSuccess = compare(diff, d[3], d[4] - '0');

            if (!isSuccess) {
                flag = true;
                break;
            }
        }

        if (!flag) answer++;
        return;
    }

    for (int i = 0; i < 8; i++) {
        if (visited[i]) continue;

        visited[i] = true;
        result.push_back(node[i]);

        dfs(result, data);

        result.pop_back();
        visited[i] = false;
    }
}

int solution(int n, vector<string> data) {
    answer = 0;
    fill(visited.begin(), visited.end(), false);

    vector<char> result;
    dfs(result, data);

    return answer;
}

int main() {
    cout << solution(2, {"N~F=0", "R~T>2"}) << endl;
}