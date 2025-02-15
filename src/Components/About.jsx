import React from "react";
import PageLayout from "../Pages/PageLayout";
import { FaBullseye, FaUsers, FaLightbulb } from "react-icons/fa";

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8BAQEAAAB9fX34+Pjn5+fi4uKNjY2YmJjCwsKQkJAwMDD7+/vr6+stLS3b29s4ODhZWVlTU1Nvb2/Pz8/x8fGnp6cWFhawsLCDg4M+Pj5mZma3t7coKChFRUVKSkogICBz1lKlAAAD5ElEQVR4nO2bi5KqMAyGJSAXUREKeN3V93/KUwrrUajQbkM4Zya/s+OozPjP15g2CbtasVgsFovFYrFYLBaL9T9qXSZx5PtRnJTrpb20qurrBZ66XOtqaUerUigvHnhe86deiHJRS+G1NaRMdU/SmCfCxSwFsYI0lHw33i7jaXd9Unoh1T3gulvCU7bXUmpRSVf7bAFPhx6cd1Ly5YHcVXj8iOkZWI/1ijSyqrxZoTFSzRsFbcoS+p9dn5VP6SnRghk+gDCNVt8GnBSrb7oFrAGGWLSkoCYzZchJ7ThUnm5aLDpS8s0bkamrKaiGlaDxlH1pIuojqT3NgSExDikVVQmJqUiH5AMp+YhITJkmqQ5VQWJKG1GfSQGVKRtSJKYCW1IUx5fKCpT0GhCYCv5FUxzoxrrbkaLJUxs7UhsSU4nuiPdxQyba+8LUZkM+ELUVhA0povOU1dmFaPWkjqaFgwcPKk+rkykqgBOZqaowK0ZlkiLZY1qVhrUoZYW8Wp1B0/sZ5iiao/CPglx97SgmD3LCxWtU7SdiqqmuyJvX4dc4K4B0gRbx7vIeV/14+l6kE1t96pwpT2KpwcOpbRD3SKmlo0uaA4XnYXu/ecdfbuLQaHc+/PiCztHhvNQoK3w2ydc3AS8St6elkJZXVgDUL0VmVdbxZhOfypfoDmqAgq6/v/WbswtcR0GoARccqZrWJ08FURPPWhANwcyH7iKP4ncYRPA84sFDP28sxaO9SP1Fs++A6/Q1BTQLtEnCl28NwiQ6wvs16cy/xiztH4SbHJCLqE6k6kjk6V+Q3QUepLPGe6nbV6An3RUzHvbKLsT7rEYKh58PZnOV2bU23mHOtILrQzfrHwHy+YPLPNFe/JZTyyqfw1M8ETwTpABifE+lySx0PKzwg/0Cg9OcFSnp6oLtqXbj1LJCnkju0sFNLbak5HOKW0vEzpwUKtRYr/YwiWQyprDLU+PezwQpzM5QkAMKKdTuwtoxR72wwttsYvAwSAFqqBdIoDDnpOH7eN2J1BdWLXhDA4U4gLAbxky4QhrVbAujdTJaPpkUcKa3O6yEoEgBTlJPpu5zsyKFFFQ+YkhJhzjdhTsuqTuGp+yBS+qBUWyd+iMrR1Iot3nhhpS0eHb3tE0NkRiS8uDgnql2yKCkR/eT+mkwBHUlhXD8xA4plEyV45Ny7yrk+KTcTYnpEagtKfdbFVDK0HdS7tV7iB9TCBXNHfE0pUBh1A5Jv/fqRgqpTaXugEXjhHVbgD8yLLYhpTxhTZC6cQwCJdRBTSa++nOF3+ghcLvpWbLxHbVJFvhHKBaLxWKxWCwWi8Viscz0B32rLpjJ86CtAAAAAElFTkSuQmCC",
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8BAQEAAAB9fX34+Pjn5+fi4uKNjY2YmJjCwsKQkJAwMDD7+/vr6+stLS3b29s4ODhZWVlTU1Nvb2/Pz8/x8fGnp6cWFhawsLCDg4M+Pj5mZma3t7coKChFRUVKSkogICBz1lKlAAAD5ElEQVR4nO2bi5KqMAyGJSAXUREKeN3V93/KUwrrUajQbkM4Zya/s+OozPjP15g2CbtasVgsFovFYrFYLBaL9T9qXSZx5PtRnJTrpb20qurrBZ66XOtqaUerUigvHnhe86deiHJRS+G1NaRMdU/SmCfCxSwFsYI0lHw33i7jaXd9Unoh1T3gulvCU7bXUmpRSVf7bAFPhx6cd1Ly5YHcVXj8iOkZWI/1ijSyqrxZoTFSzRsFbcoS+p9dn5VP6SnRghk+gDCNVt8GnBSrb7oFrAGGWLSkoCYzZchJ7ThUnm5aLDpS8s0bkamrKaiGlaDxlH1pIuojqT3NgSExDikVVQmJqUiH5AMp+YhITJkmqQ5VQWJKG1GfSQGVKRtSJKYCW1IUx5fKCpT0GhCYCv5FUxzoxrrbkaLJUxs7UhsSU4nuiPdxQyba+8LUZkM+ELUVhA0povOU1dmFaPWkjqaFgwcPKk+rkykqgBOZqaowK0ZlkiLZY1qVhrUoZYW8Wp1B0/sZ5iiao/CPglx97SgmD3LCxWtU7SdiqqmuyJvX4dc4K4B0gRbx7vIeV/14+l6kE1t96pwpT2KpwcOpbRD3SKmlo0uaA4XnYXu/ecdfbuLQaHc+/PiCztHhvNQoK3w2ydc3AS8St6elkJZXVgDUL0VmVdbxZhOfypfoDmqAgq6/v/WbswtcR0GoARccqZrWJ08FURPPWhANwcyH7iKP4ncYRPA84sFDP28sxaO9SP1Fs++A6/Q1BTQLtEnCl28NwiQ6wvs16cy/xiztH4SbHJCLqE6k6kjk6V+Q3QUepLPGe6nbV6An3RUzHvbKLsT7rEYKh58PZnOV2bU23mHOtILrQzfrHwHy+YPLPNFe/JZTyyqfw1M8ETwTpABifE+lySx0PKzwg/0Cg9OcFSnp6oLtqXbj1LJCnkju0sFNLbak5HOKW0vEzpwUKtRYr/YwiWQyprDLU+PezwQpzM5QkAMKKdTuwtoxR72wwttsYvAwSAFqqBdIoDDnpOH7eN2J1BdWLXhDA4U4gLAbxky4QhrVbAujdTJaPpkUcKa3O6yEoEgBTlJPpu5zsyKFFFQ+YkhJhzjdhTsuqTuGp+yBS+qBUWyd+iMrR1Iot3nhhpS0eHb3tE0NkRiS8uDgnql2yKCkR/eT+mkwBHUlhXD8xA4plEyV45Ny7yrk+KTcTYnpEagtKfdbFVDK0HdS7tV7iB9TCBXNHfE0pUBh1A5Jv/fqRgqpTaXugEXjhHVbgD8yLLYhpTxhTZC6cQwCJdRBTSa++nOF3+ghcLvpWbLxHbVJFvhHKBaLxWKxWCwWi8Viscz0B32rLpjJ86CtAAAAAElFTkSuQmCC",
    },
    {
      name: "Alice Johnson",
      role: "UX/UI Designer",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8BAQEAAAB9fX34+Pjn5+fi4uKNjY2YmJjCwsKQkJAwMDD7+/vr6+stLS3b29s4ODhZWVlTU1Nvb2/Pz8/x8fGnp6cWFhawsLCDg4M+Pj5mZma3t7coKChFRUVKSkogICBz1lKlAAAD5ElEQVR4nO2bi5KqMAyGJSAXUREKeN3V93/KUwrrUajQbkM4Zya/s+OozPjP15g2CbtasVgsFovFYrFYLBaL9T9qXSZx5PtRnJTrpb20qurrBZ66XOtqaUerUigvHnhe86deiHJRS+G1NaRMdU/SmCfCxSwFsYI0lHw33i7jaXd9Unoh1T3gulvCU7bXUmpRSVf7bAFPhx6cd1Ly5YHcVXj8iOkZWI/1ijSyqrxZoTFSzRsFbcoS+p9dn5VP6SnRghk+gDCNVt8GnBSrb7oFrAGGWLSkoCYzZchJ7ThUnm5aLDpS8s0bkamrKaiGlaDxlH1pIuojqT3NgSExDikVVQmJqUiH5AMp+YhITJkmqQ5VQWJKG1GfSQGVKRtSJKYCW1IUx5fKCpT0GhCYCv5FUxzoxrrbkaLJUxs7UhsSU4nuiPdxQyba+8LUZkM+ELUVhA0povOU1dmFaPWkjqaFgwcPKk+rkykqgBOZqaowK0ZlkiLZY1qVhrUoZYW8Wp1B0/sZ5iiao/CPglx97SgmD3LCxWtU7SdiqqmuyJvX4dc4K4B0gRbx7vIeV/14+l6kE1t96pwpT2KpwcOpbRD3SKmlo0uaA4XnYXu/ecdfbuLQaHc+/PiCztHhvNQoK3w2ydc3AS8St6elkJZXVgDUL0VmVdbxZhOfypfoDmqAgq6/v/WbswtcR0GoARccqZrWJ08FURPPWhANwcyH7iKP4ncYRPA84sFDP28sxaO9SP1Fs++A6/Q1BTQLtEnCl28NwiQ6wvs16cy/xiztH4SbHJCLqE6k6kjk6V+Q3QUepLPGe6nbV6An3RUzHvbKLsT7rEYKh58PZnOV2bU23mHOtILrQzfrHwHy+YPLPNFe/JZTyyqfw1M8ETwTpABifE+lySx0PKzwg/0Cg9OcFSnp6oLtqXbj1LJCnkju0sFNLbak5HOKW0vEzpwUKtRYr/YwiWQyprDLU+PezwQpzM5QkAMKKdTuwtoxR72wwttsYvAwSAFqqBdIoDDnpOH7eN2J1BdWLXhDA4U4gLAbxky4QhrVbAujdTJaPpkUcKa3O6yEoEgBTlJPpu5zsyKFFFQ+YkhJhzjdhTsuqTuGp+yBS+qBUWyd+iMrR1Iot3nhhpS0eHb3tE0NkRiS8uDgnql2yKCkR/eT+mkwBHUlhXD8xA4plEyV45Ny7yrk+KTcTYnpEagtKfdbFVDK0HdS7tV7iB9TCBXNHfE0pUBh1A5Jv/fqRgqpTaXugEXjhHVbgD8yLLYhpTxhTZC6cQwCJdRBTSa++nOF3+ghcLvpWbLxHbVJFvhHKBaLxWKxWCwWi8Viscz0B32rLpjJ86CtAAAAAElFTkSuQmCC",
    },
    {
      name: "Mark Taylor",
      role: "Project Manager",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8BAQEAAAB9fX34+Pjn5+fi4uKNjY2YmJjCwsKQkJAwMDD7+/vr6+stLS3b29s4ODhZWVlTU1Nvb2/Pz8/x8fGnp6cWFhawsLCDg4M+Pj5mZma3t7coKChFRUVKSkogICBz1lKlAAAD5ElEQVR4nO2bi5KqMAyGJSAXUREKeN3V93/KUwrrUajQbkM4Zya/s+OozPjP15g2CbtasVgsFovFYrFYLBaL9T9qXSZx5PtRnJTrpb20qurrBZ66XOtqaUerUigvHnhe86deiHJRS+G1NaRMdU/SmCfCxSwFsYI0lHw33i7jaXd9Unoh1T3gulvCU7bXUmpRSVf7bAFPhx6cd1Ly5YHcVXj8iOkZWI/1ijSyqrxZoTFSzRsFbcoS+p9dn5VP6SnRghk+gDCNVt8GnBSrb7oFrAGGWLSkoCYzZchJ7ThUnm5aLDpS8s0bkamrKaiGlaDxlH1pIuojqT3NgSExDikVVQmJqUiH5AMp+YhITJkmqQ5VQWJKG1GfSQGVKRtSJKYCW1IUx5fKCpT0GhCYCv5FUxzoxrrbkaLJUxs7UhsSU4nuiPdxQyba+8LUZkM+ELUVhA0povOU1dmFaPWkjqaFgwcPKk+rkykqgBOZqaowK0ZlkiLZY1qVhrUoZYW8Wp1B0/sZ5iiao/CPglx97SgmD3LCxWtU7SdiqqmuyJvX4dc4K4B0gRbx7vIeV/14+l6kE1t96pwpT2KpwcOpbRD3SKmlo0uaA4XnYXu/ecdfbuLQaHc+/PiCztHhvNQoK3w2ydc3AS8St6elkJZXVgDUL0VmVdbxZhOfypfoDmqAgq6/v/WbswtcR0GoARccqZrWJ08FURPPWhANwcyH7iKP4ncYRPA84sFDP28sxaO9SP1Fs++A6/Q1BTQLtEnCl28NwiQ6wvs16cy/xiztH4SbHJCLqE6k6kjk6V+Q3QUepLPGe6nbV6An3RUzHvbKLsT7rEYKh58PZnOV2bU23mHOtILrQzfrHwHy+YPLPNFe/JZTyyqfw1M8ETwTpABifE+lySx0PKzwg/0Cg9OcFSnp6oLtqXbj1LJCnkju0sFNLbak5HOKW0vEzpwUKtRYr/YwiWQyprDLU+PezwQpzM5QkAMKKdTuwtoxR72wwttsYvAwSAFqqBdIoDDnpOH7eN2J1BdWLXhDA4U4gLAbxky4QhrVbAujdTJaPpkUcKa3O6yEoEgBTlJPpu5zsyKFFFQ+YkhJhzjdhTsuqTuGp+yBS+qBUWyd+iMrR1Iot3nhhpS0eHb3tE0NkRiS8uDgnql2yKCkR/eT+mkwBHUlhXD8xA4plEyV45Ny7yrk+KTcTYnpEagtKfdbFVDK0HdS7tV7iB9TCBXNHfE0pUBh1A5Jv/fqRgqpTaXugEXjhHVbgD8yLLYhpTxhTZC6cQwCJdRBTSa++nOF3+ghcLvpWbLxHbVJFvhHKBaLxWKxWCwWi8Viscz0B32rLpjJ86CtAAAAAElFTkSuQmCC",
    },
    {
      name: "Emma Davis",
      role: "QA Engineer",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8BAQEAAAB9fX34+Pjn5+fi4uKNjY2YmJjCwsKQkJAwMDD7+/vr6+stLS3b29s4ODhZWVlTU1Nvb2/Pz8/x8fGnp6cWFhawsLCDg4M+Pj5mZma3t7coKChFRUVKSkogICBz1lKlAAAD5ElEQVR4nO2bi5KqMAyGJSAXUREKeN3V93/KUwrrUajQbkM4Zya/s+OozPjP15g2CbtasVgsFovFYrFYLBaL9T9qXSZx5PtRnJTrpb20qurrBZ66XOtqaUerUigvHnhe86deiHJRS+G1NaRMdU/SmCfCxSwFsYI0lHw33i7jaXd9Unoh1T3gulvCU7bXUmpRSVf7bAFPhx6cd1Ly5YHcVXj8iOkZWI/1ijSyqrxZoTFSzRsFbcoS+p9dn5VP6SnRghk+gDCNVt8GnBSrb7oFrAGGWLSkoCYzZchJ7ThUnm5aLDpS8s0bkamrKaiGlaDxlH1pIuojqT3NgSExDikVVQmJqUiH5AMp+YhITJkmqQ5VQWJKG1GfSQGVKRtSJKYCW1IUx5fKCpT0GhCYCv5FUxzoxrrbkaLJUxs7UhsSU4nuiPdxQyba+8LUZkM+ELUVhA0povOU1dmFaPWkjqaFgwcPKk+rkykqgBOZqaowK0ZlkiLZY1qVhrUoZYW8Wp1B0/sZ5iiao/CPglx97SgmD3LCxWtU7SdiqqmuyJvX4dc4K4B0gRbx7vIeV/14+l6kE1t96pwpT2KpwcOpbRD3SKmlo0uaA4XnYXu/ecdfbuLQaHc+/PiCztHhvNQoK3w2ydc3AS8St6elkJZXVgDUL0VmVdbxZhOfypfoDmqAgq6/v/WbswtcR0GoARccqZrWJ08FURPPWhANwcyH7iKP4ncYRPA84sFDP28sxaO9SP1Fs++A6/Q1BTQLtEnCl28NwiQ6wvs16cy/xiztH4SbHJCLqE6k6kjk6V+Q3QUepLPGe6nbV6An3RUzHvbKLsT7rEYKh58PZnOV2bU23mHOtILrQzfrHwHy+YPLPNFe/JZTyyqfw1M8ETwTpABifE+lySx0PKzwg/0Cg9OcFSnp6oLtqXbj1LJCnkju0sFNLbak5HOKW0vEzpwUKtRYr/YwiWQyprDLU+PezwQpzM5QkAMKKdTuwtoxR72wwttsYvAwSAFqqBdIoDDnpOH7eN2J1BdWLXhDA4U4gLAbxky4QhrVbAujdTJaPpkUcKa3O6yEoEgBTlJPpu5zsyKFFFQ+YkhJhzjdhTsuqTuGp+yBS+qBUWyd+iMrR1Iot3nhhpS0eHb3tE0NkRiS8uDgnql2yKCkR/eT+mkwBHUlhXD8xA4plEyV45Ny7yrk+KTcTYnpEagtKfdbFVDK0HdS7tV7iB9TCBXNHfE0pUBh1A5Jv/fqRgqpTaXugEXjhHVbgD8yLLYhpTxhTZC6cQwCJdRBTSa++nOF3+ghcLvpWbLxHbVJFvhHKBaLxWKxWCwWi8Viscz0B32rLpjJ86CtAAAAAElFTkSuQmCC",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto py-12 px-4">
        {/* About Us Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate individuals dedicated to creating
            exceptional solutions through innovation, collaboration, and
            creativity.
          </p>
        </div>

        {/* Mission Section */}
        <div className=" p-8 rounded-lg shadow-lg my-12">
          <h2 className="text-blue-500 text-3xl font-bold text-center mb-6">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <FaBullseye className="text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-sm leading-relaxed">
                Driving change through cutting-edge technology and creative
                solutions.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-sm leading-relaxed">
                Working together to build better futures for businesses and
                communities.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaLightbulb className="text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Creativity</h3>
              <p className="text-sm leading-relaxed">
                Harnessing imagination to design intuitive and impactful
                experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300 flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
