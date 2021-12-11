import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Wrapper = styled.div`
	max-width: 900px;
	margin: 0 auto;
`;

const Element = styled.li`
	margin: 0.5rem 0 0.5rem 1rem;
`;

const H2 = styled.h2`
	text-align: center;
	font-size: 2rem;
`;

export default () => (
	<Layout>
		<Wrapper>
			<SEO title="Polityka plików cookies" />
			<H2>Polityka plików “cookies” serwisu antoninagliwinska.pl</H2>
			<ol>
				<Element>
					Poprzez piki “cookies” należy rozumieć dane informatyczne
					przechowywane w urządzeniach końcowych użytkowników, przeznaczone do
					korzystania ze stron internetowych. W szczególności są to pliki
					tekstowe, zawierające nazwę strony internetowej, z której pochodzą,
					czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
				</Element>
				<Element>
					Serwis nie zbiera w sposób automatyczny żadnych informacji, z
					wyjątkiem informacji zawartych w plikach cookies.
				</Element>
				<Element>
					{' '}
					Pliki cookies przeznaczone są do korzystania ze stron serwisu.
					Operator wykorzystuje te pliki do:
					<ul>
						<Element>
							Do tworzenia anonimowych statystyk dotyczących popularności
							strony. Serwis wykorzystuje do tego usługę Google Analytics
						</Element>
						<Element>
							Do udostępnienia mapy z zaznaczoną lokalizacją gabinetu masażu.
							Serwis wykorzystuje do tego usługę Google Maps
						</Element>
					</ul>
				</Element>
				<Element>
					Pliki cookies wykorzystywane przez partnerów operatora strony
					internetowej, w tym w szczególności użytkowników strony internetowej,
					podlegają ich własnej polityce prywatności.
				</Element>
				<Element>
					W trosce o bezpieczeństwo powierzonych nam danych opracowaliśmy
					wewnętrzne procedury i zalecenia, które mają zapobiec udostępnieniu
					danych osobom nieupoważnionym. Kontrolujemy ich wykonywanie i stale
					sprawdzamy ich zgodność z odpowiednimi aktami prawnymi - ustawą o
					ochronie danych osobowych, ustawą o świadczeniu usług drogą
					elektroniczną, a także wszelkiego rodzaju aktach wykonawczych i aktach
					prawa wspólnotowego
				</Element>
				<Element>
					Standardowo oprogramowanie służące do przeglądania stron internetowych
					domyślnie dopuszcza umieszczanie plików cookies na urządzeniu końcowym
					Użytkownika. Ustawienia te mogą zostać zmienione przez Użytkownika w
					taki sposób, aby blokować automatyczną obsługę “cookies” w
					ustawieniach przeglądarki internetowej bądź informować o ich
					każdorazowym przesłaniu na urządzenia użytkownika.
				</Element>
				<Element>
					Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień
					dotyczących plików cookies. Szczegółowe informacje o możliwości i
					sposobach obsługi plików cookies dostępne są w ustawieniach
					oprogramowania (przeglądarki internetowej). Przykładowe opcje
					edytowania w popularnych przeglądarkach:
					<ul>
						<Element>
							Mozilla Firefox: www.support.mozilla.org/pl/kb/ciasteczka
						</Element>
						<Element>
							Internet Explorer: www.support.microsoft.com/kb/278835/pl
						</Element>
						<Element>
							Google Chrome:
							www.support.google.com/chrome/bin/answer.py?hl=pl&answer=95647
						</Element>
						<Element>
							Safari:
							www.safari.helpmax.net/pl/oszczedzanie-czasu/blokowanie-zawartosci/
						</Element>
					</ul>
					Operator Serwisu informuje, że zmiany ustawień w przeglądarce
					internetowej użytkownika mogą uniemożliwić poprawne działanie Stron
					Internetowych.
				</Element>
			</ol>
		</Wrapper>
	</Layout>
);
