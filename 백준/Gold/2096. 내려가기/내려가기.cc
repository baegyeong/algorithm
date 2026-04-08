#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int N;
    cin >> N;

    int minDP[3], maxDP[3];
    for (int j = 0; j < 3; j++) {
        cin >> minDP[j];
        maxDP[j] = minDP[j];
    }

    for (int i = 1; i < N; i++) {
        int input[3];
        for (int j = 0; j < 3; j++) cin >> input[j];

        int newMinDP[3], newMaxDP[3];
        newMinDP[0] = input[0] + min(minDP[0], minDP[1]);
        newMinDP[1] = input[1] + min({minDP[0], minDP[1], minDP[2]});
        newMinDP[2] = input[2] + min(minDP[1], minDP[2]);

        newMaxDP[0] = input[0] + max(maxDP[0], maxDP[1]);
        newMaxDP[1] = input[1] + max({maxDP[0], maxDP[1], maxDP[2]});
        newMaxDP[2] = input[2] + max(maxDP[1], maxDP[2]);

        for (int j = 0; j < 3; j++) {
            minDP[j] = newMinDP[j];
            maxDP[j] = newMaxDP[j];
        }
    }

    cout << max({maxDP[0], maxDP[1], maxDP[2]}) << " " << min({minDP[0], minDP[1], minDP[2]}) << "\n";

    return 0;
}