function solution(cap, n, deliveries, pickups) {
    let answer = 0;

    while (deliveries.length || pickups.length) {
        while (deliveries.length && deliveries[deliveries.length - 1] === 0) deliveries.pop();
        while (pickups.length && pickups[pickups.length - 1] === 0) pickups.pop();
        
        if (!deliveries.length && !pickups.length) break;

        answer += 2 * Math.max(deliveries.length, pickups.length);

        // 배달
        let truck = cap;
        while (truck > 0 && deliveries.length) {
            if (truck >= deliveries[deliveries.length - 1]) {
                truck -= deliveries.pop();
            } else {
                deliveries[deliveries.length - 1] -= truck;
                break;
            }
        }

        // 수거
        truck = cap;
        while (truck > 0 && pickups.length) {
            if (truck >= pickups[pickups.length - 1]) {
                truck -= pickups.pop();
            } else {
                pickups[pickups.length - 1] -= truck;
                break;
            }
        }
    }

    return answer;
}