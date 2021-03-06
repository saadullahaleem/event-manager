import React, { Component } from 'react';
import { Container, Row, Col, CardImg, Button } from 'reactstrap';
import { EventList } from '../../components/EventList/EventList';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import { fetchCurrentOrganisation } from '../../actions';
import { isEmpty } from 'lodash';
import DescriptionContainer from '../../components/DescriptionContainer/DescriptionContainer';
import type { BaseReduxPropTypes } from '../../types/base-props-types';
import { connect } from 'react-redux';
import SocialShare from '../../components/SocialShare/SocialShare';
import MetaTagsComponent from '../../components/SocialShare/MetaTagsComponent';

type Props = BaseReduxPropTypes & {
  organisation: Object,
};

class Organisation extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { organisation: {} };
  }
  componentDidMount() {
    this.getCurrentOrganisation();
  }

  getCurrentOrganisation = () => {
    const organisationId = this.props.match.params.organisation_id;
    const { dispatch } = this.props;
    dispatch(fetchCurrentOrganisation(organisationId));
  };

  render() {
    const { organisation } = this.props.currentOrganisation;
    return (
      <div>
        {!isEmpty(organisation) ? (
          <Container>
            <MetaTagsComponent
              title={organisation.name}
              description={organisation.description}
              image={organisation.logo}
              url={window.location.href}
            />
            <CardImg top width="100%" src={organisation.logo} />
            <ContentHeader heading={organisation.name} />
            <DescriptionContainer description={organisation.description} />
            <ContentHeader heading="Our Events" />
            <Row className="block-content text-justify">
              {organisation.events ? (
                <Col>
                  <EventList events={organisation.events} />
                </Col>
              ) : (
                <Col className="text-center">No Events</Col>
              )}
            </Row>
          </Container>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentOrganisation: { ...state.currentOrganisation },
});

export default connect(mapStateToProps)(Organisation);
