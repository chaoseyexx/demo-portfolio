export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold">SW</span>
            </div>
            <p className="text-muted-foreground">
              Creating stunning visual experiences through animation and video editing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Animation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Video Editing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Color Grading
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Motion Graphics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Portfolio</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#work" className="hover:text-primary transition-colors">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; 2026 SALLY WYNTER. All rights reserved.</p>
          <p>Crafted with creativity and passion</p>
        </div>
      </div>
    </footer>
  )
}
