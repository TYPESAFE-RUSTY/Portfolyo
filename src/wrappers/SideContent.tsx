export default function SideContent({ children }: { children: React.ReactNode }
) {
    return (
        <div className="dl-side-content">
            <div className="content-lines-wrapper">
                <div className="content-lines-inner">
                    <div className="content-lines"></div>
                </div>
            </div>
            {children}
        </div >
    )
}
