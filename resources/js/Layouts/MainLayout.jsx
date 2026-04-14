export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen">
            <main>{children}</main>

            <footer className="p-4 border-t text-center">
                © {new Date().getFullYear()} - All rights reserved.
            </footer>
        </div>
    );
}
