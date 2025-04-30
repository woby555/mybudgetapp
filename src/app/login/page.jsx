export default function Login(){
    return(
        <>
            <h1>You are on the login page.</h1>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">MyBudgetPro</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li><a>Features</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}