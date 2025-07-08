function App() {
    const user = "Maria";
    return <Parent user={user} />;
}
function Parent({ user }) {
    return <Child user={user} />;
}
function Child({ user }) {
    return <GrandChild user={user} />;
}
function GrandChild({ user }) {
    return <p>Olá, {user}!</p>
}