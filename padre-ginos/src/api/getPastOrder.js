export default async function getPastOrder(order) {
    await new Promise(resolve => setTimeout(resolve, 4000));
    const response = await fetch(`/api/past-order/${order}`);
    const data = await response.json();
    return data;
}
