import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Article() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-normal tracking-widest mb-6">
        How Sam Anisulowo Foundation Is Changing Lives
      </h1>

      <p className="mb-4 text-gray-800 font-bold tracking-widest text-sm">
        At Sam Anisulowo Foundation, we believe real change starts with people.
        Behind every face we encounter is a story — a story of hope, resilience,
        struggle, and the desire for a better tomorrow. Every community we reach
        reminds us that sometimes what people need most is not just assistance,
        but reassurance that they are seen, heard, and not forgotten.
      </p>

      <p className="mb-4 text-gray-800 font-bold tracking-widest text-sm">
        Every day, many individuals wake up uncertain about what the future holds.
        Some are students unsure if their education can continue. Some are families
        doing everything they can to stay strong through difficult circumstances.
        Some are young people full of potential but lacking the opportunities that
        could help them grow. These realities are what drive our commitment to keep
        showing up, to keep helping, and to keep believing that even small acts of
        kindness can create lasting change.
      </p>

      <p className="mb-4 text-gray-800 font-bold tracking-widest text-sm">
        Our work is rooted in compassion. Whether through outreach programs,
        educational encouragement, or community support initiatives, our goal
        remains the same — to remind people that they matter. Sometimes the most
        powerful thing we can offer is not just material support, but dignity,
        encouragement, and the message that someone cares about their future.
      </p>

      <p className="mb-4 text-gray-800 font-bold tracking-widest text-sm">
        What makes this journey meaningful are the moments that cannot be measured
        by numbers. The quiet gratitude in someone’s voice. The renewed confidence
        of a young person who begins to believe in their potential again. The sense
        of unity created when people come together to support one another. These
        are the moments that define impact far beyond statistics.
      </p>

      <p className="mb-4 text-gray-800 font-bold tracking-widest text-sm">
        We have learned that real impact is not always loud. Sometimes it is found
        in small victories — a word of encouragement at the right time, a helping
        hand during a difficult season, or the simple reminder that nobody should
        have to face their challenges alone. These moments may seem small to the
        world, but to the people experiencing them, they can mean everything.
      </p>

      <p className="mb-4 text-gray-800 font-bold tracking-widest text-sm">
        None of this would be possible without the people who believe in this
        mission. Volunteers who give their time. Supporters who give what they can.
        Partners who share the vision of building stronger communities. Every act
        of generosity, no matter how small it may seem, becomes part of a much
        bigger story of transformation.
      </p>

      <p className="mb-4 text-gray-800 font-bold tracking-widest text-sm">
        The Sam Anisulowo Foundation exists because we believe that when people
        are supported, encouraged, and empowered, they can achieve more than they
        ever imagined. We believe that kindness is never wasted. We believe that
        hope is powerful. And we believe that when a community decides to care for
        one another, real change becomes possible.
      </p>

      <p className="mb-4 text-gray-800 font-bold tracking-widest text-sm">
        Our journey is still ongoing. There are still more lives to reach, more
        communities to support, and more opportunities to create meaningful impact.
        But what keeps us moving forward is the simple belief that every life we
        touch matters, and every effort we make today can help shape a better
        tomorrow.
      </p>

      <p className="mb-4 text-gray-800 font-bold tracking-widest text-sm">
        This is more than a foundation. It is a commitment to people. It is a
        promise to continue caring. It is a reminder that even in difficult times,
        hope can still be built, futures can still be shaped, and lives can still
        be changed through collective compassion.
      </p>

      <p className="mb-4 text-gray-800 font-bold tracking-widest text-sm">
        And as we continue this work, we remain guided by one simple belief:
        when we lift others, we all rise together.
      </p>
         {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-12">
                      <a href="https://www.facebook.com/samuel.foundations" target="_blank" aria-label="Facebook" className="hover:text-blue-600 text-gray-800"><FaFacebookF /></a>
                      <a href="#" aria-label="Twitter" className="hover:text-blue-400 text-gray-800"><FaTwitter /></a>
                      <a href="https://www.instagram.com/sam_anisulowo_foundations" target="_blank" aria-label="Instagram" className="hover:text-red-600 text-gray-800"><FaInstagram /></a>
                      <a href="https://www.linkedin.com/company/sam-anisulowo-foundation/" target="_blank" aria-label="LinkedIn" className="hover:text-blue-600 text-gray-800"><FaLinkedinIn /></a>
                      <a href="https://youtube.com/@samanisulowofoundation" target="_blank" aria-label="YouTube" className="hover:text-red-600 text-gray-800"><FaYoutube /></a>
                    </div>
    </div>
  );
}