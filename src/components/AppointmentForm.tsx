export const AppointmentForm = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <section id="appointment-form" className="py-16 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Online Appointment
            </h2>
            <p className="text-muted-foreground mb-8">
              Take care of your health and that of your family today!
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name*</label>
                  <Input placeholder="Full Name..." className="rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Address</label>
                  <Input placeholder="Your Address..." className="rounded-lg" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone*</label>
                  <Input placeholder="Phone Number..." className="rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email*</label>
                  <Input placeholder="Email address..." type="email" className="rounded-lg" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Country</label>
                  <Input placeholder="Your Country..." className="rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Gender*</label>
                  <Select>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Choose gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Treatment</label>
                  <Select>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select Treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Checkup</SelectItem>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="oncology">Oncology</SelectItem>
                      <SelectItem value="orthopedics">Orthopedics</SelectItem>
                      <SelectItem value="dental">Dental</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                      <SelectItem value="dermatology">Dermatology</SelectItem>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="gynecology">Gynecology</SelectItem>
                      <SelectItem value="ent">ENT</SelectItem>
                      <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                      <SelectItem value="gastroenterology">Gastroenterology</SelectItem>
                      <SelectItem value="urology">Urology</SelectItem>
                      <SelectItem value="psychiatry">Psychiatry</SelectItem>
                      <SelectItem value="physiotherapy">Physiotherapy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Date of Birth*</label>
                  <Input type="date" className="rounded-lg" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Note If Any</label>
                <Textarea placeholder="Write content..." className="rounded-lg min-h-[100px]" />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                  Accept the Terms and Privacy Policy
                </label>
              </div>

              <Button
                type="submit"
                className="bg-navy hover:bg-primary text-navy-foreground rounded-full px-8 group"
              >
                Submit Appointment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
